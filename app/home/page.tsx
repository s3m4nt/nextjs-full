import Image from "next/image";

export default function HomePage() {
    return (
        <div className="flex-col-s">

            <h1>HOMEPAGE.</h1>

            <Image
            src="https://images.unsplash.com/photo-1501789605990-988ca86e9ff3?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8bWVtb3JpYWwlMjBkYXl8ZW58MHx8MHx8fDA%3D"
            alt="Valentino Funghi"
            width={700}
            height={20}
            priority
            />

            <span className="body-text">
                <p>
                    Lorem ipsum dolor sit amet, eum probo nihil nostrud et, ex his minim ridens. Ius ut elit primis inciderint, ne nostrum detraxit pro, ex usu dolorem vituperata honestatis. Ei appellantur conclusionemque est, esse atomorum at eum, liber nostro repudiare eos cu. Dicta soleat mel no, ius habemus adolescens ut.
                </p>
                <p>
                    Cu novum meliore est, minimum nominati nam in, eu sint summo eum. His veri ridens volutpat te. Ius sumo argumentum in, decore mandamus vix ei, mel eligendi adolescens cu. Nec cetero option scripta cu. Ad justo accommodare per, ut mei ignota debitis. Dico decore utamur no usu, ex sea purto idque graecis, an nullam verterem reprimique sed.
                </p>
                <p>
                    Eu per verear mediocrem. Debet iracundia his at, possit malorum ne cum, ea mutat iudico instructior sea. Eos accumsan consequat ex. Ei vel mazim harum tacimates. Pri dicam persequeris efficiantur id, agam regione accusata id eum. In fugit altera per, et has lucilius perpetua delicatissimi.
                </p>
                <p>
                    Soluta utroque oportere pri no, qui dicunt possim ei. Ei ubique impetus dignissim usu, hinc magna populo est id. Erat intellegam pri ut, ei timeam scriptorem signiferumque duo, vis te persius fastidii delicatissimi. Scripta eruditi intellegebat cu vis, cu inimicus posidonium usu.
                </p>
                <p>
                    Dico ipsum et mel, has eu nisl viris tantas, ei debitis nominavi vituperata mei. Exerci sensibus nam an, est unum dicam tacimates an, ut eam idque inimicus. Ut est ferri similique adversarium, sanctus consequuntur his eu, sit ei modus partiendo vulputate. In wisi prompta quaestio mei, labitur principes quo ut. Odio fabellas iudicabit ei usu, id indoctum urbanitas mnesarchum vis.
                </p>

            </span>
        </div>
    )
}