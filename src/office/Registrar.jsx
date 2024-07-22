import './office.css';
import EditIcon from './icons8-edit-24 (2).png'

function Registrar() {
  // Example data for registrar office questions
  const registrarQuestions = [
    { id: 1, text: '1. Ang paraan ng pagpapatala ay simple, maayos at kasiya-siya sa mga nagpapatala' },
    { id: 2, text: '2. Ang mga dokumento, pormularyo at mga kasulatan ay maayos na nakahanay upang madaling matunton.' },
    { id: 3, text: '3. Ang mga kasulatan at sertipiko ay madaling nakukuha ng may mga kahilingan sa mga dokumentong ito.' },
    { id: 4, text: '4. Ang tanggapan ng registrar ay nahahati sa iba\'t ibang serbisyong ginagampanan nito kaya\'t madaling malalapitan ang mga may tungkulin ayon sa pangangailangan.' },
    { id: 5, text: '5. Ang mga kawani ay madaling lapitan, maayos makipag-usap at may kaava-avang personalidad.' },
    // Add more questions as needed
  ];

  return (
    <div className="office-container">
      <div className="questions-list">
        {registrarQuestions.map((question) => (
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

export default Registrar;
