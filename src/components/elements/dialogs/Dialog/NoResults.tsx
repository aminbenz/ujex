interface Props {
  title: string;
  description?: string;
  btnDesc?: string;
  to?: string;
}

function NoResults({ title, description, btnDesc, to }: Props) {
  return (
    <div>
      <section className="info-section" style={{ height: '80vh' }}>
        <div className="info-section-container">
          <h2 className="title">{title}</h2>
          <p className="description">
            {/* <b>{PATH_NAME} </b>page <b>coming soon</b>. tap to */}
            {description}
          </p>
          <a className="btn btn-primary-md" href={`${to || '/'}`}>
            {' '}
            {btnDesc || 'Home'}
          </a>
        </div>
      </section>
    </div>
  );
}

export default NoResults;
