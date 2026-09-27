import { createClient } from '@supabase/supabase-js'

function projectUrl(url: string) {
  return url.replace(/\/rest\/v1\/?$/, '')
}

export function getAnonymousSupabase() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!url || !anonKey) throw new Error('Supabase is not configured.')

  return createClient(projectUrl(url), anonKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })
}

export async function authenticateRequest(request: Request) {
  const authorization = request.headers.get('authorization')
  const accessToken = authorization?.match(/^Bearer\s+(.+)$/i)?.[1]
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!accessToken || !url || !anonKey) return null

  const supabase = createClient(projectUrl(url), anonKey, {
    auth: { autoRefreshToken: false, persistSession: false },
    global: { headers: { Authorization: `Bearer ${accessToken}` } },
  })
  const { data, error } = await supabase.auth.getUser(accessToken)
  if (error || !data.user) return null
  return { supabase, user: data.user }
}