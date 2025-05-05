export default function PeCard({ numero, status }) {
    let statusClass = '';
    let label = '';
    let icon = '%';
  
    if (status === 'Tratado') {
      statusClass = 'tratado';
      label = 'Tratado';
    } else if (status === 'Não-Tratado') {
      statusClass = 'nao-tratado';
      label = 'Não-Tratado';
    } else {
      statusClass = 'sem-info';
      label = 'Sem informações';
      icon = '-';
    }
  
    return (
      <div className="pe-card">
        <div className="pe-left">
          <h2>Pé {numero}</h2>
          <div className="status">
            <div className={`status-dot ${statusClass}`}></div>
            <span>{label}</span>
          </div>
        </div>
        <div className="pe-right">
          <button className="ver-btn">
            Ver
            <div className="ver-icon">{icon}</div>
          </button>
          <div className="relatorios">Relatórios &gt;</div>
        </div>
      </div>
    );
  }
  