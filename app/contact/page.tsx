import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export default function ContactPage() {
    return (
        <PageLayout>
        <div className="flex flex-col items-center justify-start">

          <h1>CONTACT.</h1>

            <span className="mt-5 body-text">
                <p>
                    <Link className="text-blue-500 underline"
                      href="mailto:Loremipsum@aol.com">Loremipsum@aol.com
                    </Link>
                </p>
            </span>

        </div>
        </PageLayout>
    )
}