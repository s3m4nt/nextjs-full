import PageLayout from "@/components/PageLayout";
import Link from "next/link";

export default function ContactPage() {
    return (
        <PageLayout>
        <div className="flex-col-s">

          <h1>CONTACT.</h1>

            <span className="body-text">
                <p className="text-center">
                    <Link className="text-blue-500 underline"
                      href="mailto:Loremipsum@aol.com">Loremipsum@aol.com
                    </Link>
                </p>
            </span>

        </div>
        </PageLayout>
    )
}