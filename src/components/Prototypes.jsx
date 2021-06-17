import usePrototypes from '../hooks/usePrototypes';
import useActions from '../hooks/useActions';

export default function Prototypes() {
  const prototypes = usePrototypes();
  const actions = useActions();
  return (
    <main>
      <div className="prototypes">
        {prototypes.map(prototype => {
          const { id, title, artist, desc, thumbnail, price, pieUrl } = prototype;
          const click = () => {
            actions.addToOrder(id);
          };
          return (
            <div className="prototype" key={id}>
              <a href={pieUrl} target="_blank" rel="noreferrer">
                <div>
                  <video
                    autoPlay
                    loop
                    playsInline
                    className="prototype__artwork prototype__edit"
                    src={thumbnail}
                    style={{
                      objectFit: 'contain',
                    }}
                  />
                </div>
              </a>
              <div className="prototype__body">
                <div className="prototype__title">
                  <div className="btn btn--primary float--right">
                    <i className="icon icon--plus" onClick={() => click(id)} />
                  </div>
                  {title}
                </div>
                <p className="prototype__price">$ {price}</p>
                <p className="prototype__desc">{desc}</p>
              </div>
              <div className="prototype__artist">
                <p className="float--right" style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>
                  {artist}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
}
