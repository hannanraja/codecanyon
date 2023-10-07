import styles from '../../app/page.module.css'
export default function SignInForm(props:any){
    return(
        <div className={`col-sm-10 col-md-6 pt-3 pb-4 ${styles.blurbackground}`} >
            <div>
              <div
                className="bg order-1 order-md-2"
                style={{ backgroundImage: "url('/images/bg_1.jpg')" }}
              ></div>
              <div className="contents order-2 order-md-1">
                <div className="container">
                  <div className="row align-items-center justify-content-center">
                    <div className="col-md-7">
                      <div className="mb-4">
                        <h3>Sign In</h3>
                        <p className="mb-4">
                          Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                          consectetur adipisicing.
                        </p>
                      </div>
                      <form action="#" method="post">
                        <div className="form-group first">
                          <label htmlFor="username">Username</label>
                          <input
                            type="text"
                            className="form-control"
                            id="username"
                          />
                        </div>
                        <div className="form-group last mb-3">
                          <label htmlFor="password">Password</label>
                          <input
                            type="password"
                            className="form-control"
                            id="password"
                          />
                        </div>

                        <div className="d-flex mb-5 align-items-center">
                          <input type="checkbox" className="mr-2" />{" "}
                          <label className="control control--checkbox mb-0 ml-4 mr-05">
                            <span className="caption">Remember me</span>

                            <div className="control__indicator"></div>
                          </label>
                          <span className="m-3">
                            <a href="#" className="forgot-pass">
                              Forgot Password
                            </a>
                          </span>
                        </div>
                        <input
                          type="submit"
                          value="Log In"
                          className="btn btn-block btn-primary"
                        />
                      </form>
                      <p>Dont have an Account ?<span onClick={()=>{props.userExist(false)}} className={styles.hyperlinkSpan}>Create one</span> </p>
                   
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}