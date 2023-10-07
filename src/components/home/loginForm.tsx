import styles from "../../app/page.module.css";
export default function LoginForm(props: any) {
  return (
    <div className={`col-sm-10 col-md-6 pt-3 pb-4 ${styles.blurbackground}`}>
      <div className="contents order-2 order-md-1">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-md-7">
              <div className="mb-4"></div>
              <form action="#" method="post">
                <div className="form-group first">
                  <label htmlFor="username">Name</label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="form-group first">
                  <label htmlFor="username">Email</label>
                  <input type="email" className="form-control" id="email" />
                </div>
                <div className="form-group last mb-3">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    id="password"
                  />
                </div>
                <div className="form-group last mb-3">
                  <label htmlFor="password">Phone Number</label>
                  <input type="tel" className="form-control" id="password" />
                </div>
                <input
                  type="submit"
                  value="Log In"
                  className="btn btn-block btn-primary"
                />
              </form>
              <p>
                Already have an account ?
                <span
                  onClick={() => {
                    props.userExist(true);
                  }}
                  className={styles.hyperlinkSpan}
                >
                  Sign In
                </span>{" "}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
