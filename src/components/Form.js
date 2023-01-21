function Form(){
 return(
     <div className="w-60 p-3" > 
     <h3 className="text-center " style={{"margin-bottom":"2%"}}>Contact US</h3>
        <div class="form-floating mb-3 mt-10">
             <input type="text" class="form-control" id="floatingName" placeholder="Name" />
             <label for="floatingName">Name</label>
         </div>
         <div class="form-floating mb-3">
             <input type="email" class="form-control" id="floatingInput" placeholder="name@example.com" />
             <label for="floatingInput">Email address</label>
         </div>
         <div class="form-floating">
             <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style={{"height":"100px"}}></textarea>
             <label for="floatingTextarea2">Comments</label>
         </div>
         <input className="btn btn-primary" style={{"margin-left":"45%"}} type="submit" value="Submit"></input>
     </div>
 )
}
export default Form;