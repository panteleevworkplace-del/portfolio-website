import { clients } from '../data/portfolio';

export default function Clients() {
  return (
    <section className="section clients-section">
      <div className="clients-orbit" aria-label="Favourite clients">
        <div className="clients-title">
          my<br />favourite<br />clients
        </div>
        <div className="cursor-hand" aria-hidden="true">☝</div>

        {clients.map((client, index) => (
          <div className={`client-dot client-${index + 1}`} key={client.name}>
            <span className="client-thumb" />
            <span>{client.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
