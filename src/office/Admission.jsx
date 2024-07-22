import './office.css';
import EditIcon from './icons8-edit-24 (2).png'; // Adjust the path as needed

function Admission() {
  // Example data for admission questions
  const admissionQuestions = [
    { id: 1, text: '1. Ang mga patakaran at iba\'t ibang kursong mapag-aralan sa Kolehiyo ay malawak na naipapabatid sa pamamagitan ng "brochures", "pamphlets" at mga lathala at anunsiyong nakapisikal sa "bulleting board".'},
    { id: 2, text: '2. Ang mga panuntunan, patakaran, tuntunin at gabay patungkol sa "admission" ay malinaw at ipinapatupad nang may sistema.'},
    { id: 3, text: '3. Ang mga kawani ng tanggapan ay madaling lapitan, nagpapaliwanag nang maayos, matulungin at may kaaya-ayang ugali.'},
    { id: 4, text: '4. Ang pagpapaskil ng mga nakapasa sa CNSC AT (CNSC Admission Test) ay naayon sa talatakdaan.'},
    { id: 5, text: '5. Ang resulta ng CNSC AT ay maaring malaman kung kinakailangan.'},
    // Add more questions as needed
  ];

  return (
    <div className="office-container">
      <div className="questions-list">
        {admissionQuestions.map((question) => (
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

export default Admission;
