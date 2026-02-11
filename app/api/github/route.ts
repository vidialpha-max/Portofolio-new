export async function GET() {
  console.log('GITHUB_USERNAME:', process.env.GITHUB_USERNAME);
  console.log('GITHUB_TOKEN:', process.env.GITHUB_TOKEN ? 'ADA' : 'TIDAK ADA');
  // ... sisanya
}