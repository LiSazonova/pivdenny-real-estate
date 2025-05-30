import { createClient } from '@sanity/client'

export const client = createClient({
  projectId: 'q3epip6o',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: true,
})