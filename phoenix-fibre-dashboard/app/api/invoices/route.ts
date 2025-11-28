import { NextResponse } from 'next/server';
import { prisma } from '@/src/lib/prisma';

export async function GET() {
  try {
    const invoices = await prisma.invoice.findMany();
    return NextResponse.json(invoices);
  } catch (error) {
    return NextResponse.error();
  }
}

export async function POST(request: Request) {
  const data = await request.json();
  
  try {
    const newInvoice = await prisma.invoice.create({
      data: {
        amount: data.amount,
        dueDate: data.dueDate,
        customerId: data.customerId,
        status: data.status,
      },
    });
    return NextResponse.json(newInvoice, { status: 201 });
  } catch (error) {
    return NextResponse.error();
  }
}