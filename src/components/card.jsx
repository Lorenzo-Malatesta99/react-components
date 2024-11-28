export default function Card() {
  return (
    <div className="card">
      <img src="public\th.jpg" className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">Titolo del post</h5>
        <p className="card-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione
          tempora, magni provident aliquid, nostrum sapiente nihil soluta autem
          aspernatur esse ipsa illo. Aut, officia sunt. Est nihil provident
          quaerat ad.
        </p>
        <a href="#" className="btn btn-primary">
          Leggi di più
        </a>
      </div>
    </div>
  );
}