import './office.css';
import EditIcon from './icons8-edit-24 (2).png'



function Canteen() {
  // Example data for canteen questions
  const canteenQuestions = [
    { id: 1, text: '1. Ang canteen ay nagdudulot ng masarap, balanse, kaakit-akit at murang pagkain.'},
    { id: 2, text: '2. Ang serbisyo ay maagap, magalang at kaiga-igaya sa mga tagatangkilik.'},
    { id: 3, text: '3. Ang mga pagkain ay inihahanda ayon sa alituntunin ng sanitasyon.'},
    { id: 4, text: '4. Ang mga tagapaluto at tagapagsilbi ay malulusog, mabibilis at laging may nakalaang ngiti.'},
    { id: 5, text: '5. Ang canteen ay nasa isang lugat na kanais-nais sa mga tagatangkilik.'},

    // Add more questions as needed
  ];

  return (
    <div className="office-container">
      <div className="questions-list">
        {canteenQuestions.map((question) => (
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

export default Canteen;
