import './office.css';
import EditIcon from './icons8-edit-24 (2).png'

function HealthService() {
  // Example data for health service office questions
  const healthServiceQuestions = [
    { id: 1, text: '1. May "medical team" na binubuo ng doktor, dentista at mga nurses na laging laang maglingkod anumang oras, lalo\'t higit sa mga agarang pangangailangan.' },
    { id: 2, text: '2. May talatakdaan ng konsultasyon at sapat na oras ang inilalaan dito.' },
    { id: 3, text: '3. Ang "medical staff ay nagbibigay ng mga impormasyon at nagtuturo ng mga kaalamang pangkalusugan.' },
    { id: 4, text: '4. Ang sentrong pangkalusugan ay nagbibigay ng mga libreng serbisyo gayundin ng mga libreng gamot para sa mga mag-aaral na kinakapos.' },
    { id: 5, text: '5. Nagtatag rin ito ng mga ugnayan sa iba pang ahensya, sentrong pangkalusugan, ospital at mga doktor upang mapadali ang koordinasyon sa oras ng pangangailangan.' },
    // Add more questions as needed
  ];

  return (
    <div className="office-container">
      <div className="questions-list">
        {healthServiceQuestions.map((question) => (
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

export default HealthService;
