export default function Contact() {
  return (
    <>
      <main>
        <div className="container-light">
          <form action="">
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                Name
              </label>
              <input
                type="text"
                className="form-control"
                name=""
                id=""
                aria-describedby="helpId"
                placeholder=""
              />
              <small id="helpId" className="form-text text-muted">
                Help text
              </small>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label">
                City
              </label>
              <select className="form-select form-select-lg" name="" id="">
                <option selected="">Select one</option>
                <option value="">New Delhi</option>
                <option value="">Istanbul</option>
                <option value="">Jakarta</option>
              </select>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id=""
              />
              <label className="form-check-label" htmlFor="">
                Default checkbox
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                defaultValue=""
                id=""
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="">
                Default checkbox
              </label>
            </div>
            <div className="mb-3">
              <label htmlFor="" className="form-label" />
              <textarea
                className="form-control"
                name=""
                id=""
                rows={3}
                defaultValue={""}
              />
            </div>
          </form>
        </div>
      </main>
    </>
  );
}
