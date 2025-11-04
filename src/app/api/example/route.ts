import { NextResponse } from 'next/server';

/**
 * Example API Route
 * 
 * This is a template for creating API routes in Next.js.
 * 
 * Required Environment Variables:
 * - DATABASE_URL: PostgreSQL connection string
 *   Example: postgresql://user:password@localhost:5432/dbname
 * 
 * - BETTER_AUTH_SECRET: Secret key for BetterAuth session encryption
 *   Generate with: openssl rand -base64 32
 * 
 * Optional Environment Variables:
 * - NODE_ENV: Set to 'development' or 'production'
 * 
 * To use this route:
 * 1. Copy this file to create your own API route
 * 2. Update the path structure (folder name = route path)
 * 3. Implement your logic in the appropriate HTTP method handler
 */

/**
 * GET handler example
 */
export async function GET() {
  try {
    // Example: Access environment variables
    const nodeEnv = process.env.NODE_ENV || 'development';
    
    // Example: Check if required env vars are set
    const requiredEnvVars = {
      DATABASE_URL: !!process.env.DATABASE_URL,
      BETTER_AUTH_SECRET: !!process.env.BETTER_AUTH_SECRET,
    };
    
    return NextResponse.json({
      message: 'Example API route',
      environment: nodeEnv,
      requiredEnvVars,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

/**
 * POST handler example
 */
export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    return NextResponse.json({
      message: 'POST request received',
      receivedData: body,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}

