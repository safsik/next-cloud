import { NextResponse } from 'next/server';
import { getSession } from 'src/lib/api'; // Assuming you have a function to get session

export async function POST(request: Request) {
  const { email, password } = await request.json();

  // Implement your authentication logic here
  const session = await getSession(email, password);

  if (session) {
    return NextResponse.json({ success: true, session });
  } else {
    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
  }
}

export async function GET(request: Request) {
  const session = await getSession(); // Get session from the request

  if (session) {
    return NextResponse.json({ success: true, session });
  } else {
    return NextResponse.json({ success: false, message: 'Not authenticated' }, { status: 401 });
  }
}