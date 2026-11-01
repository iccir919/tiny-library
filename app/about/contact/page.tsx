export default function ContactPage() {
    return (
        <main className="max-w-2xl mx-auto p-4">
            <p className="text-sm uppercase tracking-wide text-gray-700">Ways to reach us</p>
            <h1 className="text-4xl font-semibold text-gray-700 mt-2">Contact</h1>
            <ul className="list-disc text-gray-600 mt-4 pl-5 space-y-2">
                <li>Book suggestions: Tell us what we should add to the shelf.</li>
                <li>Corrections: Spotted an error? Let us know so we can fix it.</li>
                <li>Careers: Interested in joining Tiny Library? Send a short note and we’ll get back to you.</li>
            </ul>
            <p className="text-gray-600 mt-4">
                Email:{' '}
                <a 
                    href="mailto:hello@tinylibrary.example"
                    className="text-gray-700 underline ml-1" 
                >
                    hello@tinylibrary.example
                </a>
            </p>
            <p className="text-gray-600 mt-4">
                We&apos;re a small team, so we don&apos;t list a phone number. Email is best.
            </p>
        </main>
    )
}