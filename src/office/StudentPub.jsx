import './office.css';
import EditIcon from './icons8-edit-24 (2).png'

function StudentPub() {
  // Example data for student publication office questions
  const studentPubQuestions = [
    { id: 1, text: '1. May pakikipag-ugnayan sa administrasyon at sa komunidad ng paaralan tungkol sa mga isyung ilalathala.' },
    { id: 2, text: '2. Sinusunod ang mga alituntunin ng journalism at sumasailalim rin sa mga patakaran ng Kolehiyo.' },
    { id: 3, text: '3. May suportang nakukuha sa administrasyon sa anyo ng paglalaan ng pondo para sa gastusin sa paglalathala.' },
    { id: 4, text: '4. Ang patnugutan at ang tagapayo ay dumaan sa mahigpit na pagsubok upang maging karapat-dapat sa tungkuling gagampanan sa gayo\'y kinikilala ang kanilang talino at pagiging malikhain.' },
    { id: 5, text: '5. Ang mga nilalamang artikulo at likhang panulat ay nagmumulat sa kamalayan ng mga mag-aaral upang magkaroon sila ng positibong pananaw sa buhay.' },
    // Add more questions as needed
  ];

  return (
    <div className="office-container">
      <div className="questions-list">
        {studentPubQuestions.map((question) => (
          <div key={question.id} className="question-card">
            <p>{question.text}</p>
            <button>
              <img src={EditIcon} alt="Edit" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StudentPub;
