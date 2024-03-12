interface PropsNumber {
    id: number;
}

interface Question {
    titleQuestion: string;
    responses: string[];
    correctResponseIndex: number;
}

function QuestionCard(props: PropsNumber) {
    const questions: Question[] = [
        {
            titleQuestion: "Premiere Question",
            responses: ["Réponse A", "Réponse B", "Réponse C"],
            correctResponseIndex: 0 // Index de la réponse correcte dans le tableau des réponses
        },
        {
            titleQuestion: "Premiere Question",
            responses: ["Réponse A", "Réponse B", "Réponse C"],
            correctResponseIndex: 0 // Index de la réponse correcte dans le tableau des réponses
        },
        {
            titleQuestion: "Premiere Question",
            responses: ["Réponse A", "Réponse B", "Réponse C"],
            correctResponseIndex: 0 // Index de la réponse correcte dans le tableau des réponses
        },
        {
            titleQuestion: "Premiere Question",
            responses: ["Réponse A", "Réponse B", "Réponse C"],
            correctResponseIndex: 0 // Index de la réponse correcte dans le tableau des réponses
        },

        // Ajoutez d'autres questions ici...
    ];

    function loadQuizz(id: number) {
        const question = questions[id];
        const { responses } = question;
        const nombreDeQuestion = responses.length;

        if (nombreDeQuestion <= 2) {
            return (
                <div>
                    <h1>Question suivante</h1>
                </div>
            );
        }

        const elements = [];
        for (let i = 0; i < nombreDeQuestion; i++) {
            elements.push(
                <div key={i} className="align-item" onClick={()=>checkMark(id,i)}>
                    {responses[i]}
                </div>
            );
        }

        return <div>{elements}</div>;
    }
    function checkMark(questionId : number , responseIndex : number){
        console.log(questionId , responseIndex)
        if(responseIndex === questions[questionId].correctResponseIndex){
            console.log("Bonne réponse")
        }
    }

    return (
        <div>
            {loadQuizz(props.id)}
        </div>
    );
}

export default QuestionCard;
