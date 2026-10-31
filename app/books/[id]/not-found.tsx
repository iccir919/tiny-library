import Link from "next/link";

export default function BookNotFound() {
    return (
        <main className="max-w-6xl mx-auto p-4">
            <div className="text-center mt-6">
                <h1 className="text-2xl font-semibold text-gray-700">Book Not Found</h1>
                <p className="text-gray-500 mt-2">This book isn&apos;t on our shelf.</p>
                <Link 
                    href="/books"
                    className="mt-4 inline-block text-sm uppercase tracking-wide text-gray-500 hover:text-gray-700"
                >
                    Back to books overview
                </Link>
            </div>
        </main>
    )
}