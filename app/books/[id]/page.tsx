type BookDetailPageProps = {
    params: Promise<{
        id: string;
    }>;
}

export default async function BookPage({ params }: BookDetailPageProps) { 
    const { id } = await params;

    return (
        <div>
            <h1>Tiny Library - Book Details Page</h1>
            <p>Book ID: {id}</p>
        </div>
    )
}