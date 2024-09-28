'use client';
import 'bootstrap/dist/css/bootstrap.css';

export default function Form1() {

    async function Hashtag(e: any){
        e.preventDefault();
    
        const data = {
          HashtagString: (e.target.hashtagString.value)
        }
        

        const dataSeparated = data.HashtagString.split("");
        let validate = "";
        const nonAlphabetical = [1, "2", "3", "4", "5", "6", "7", "8", "9", "0"];
        
        if (dataSeparated[0] != "#") {
          validate = "Invalid";
          alert("The tag is invalid, please enter the tag with # at first");
        }else{
          for (let i = 0; i < dataSeparated.length; i++) {
            const currentSymbol = dataSeparated[i];
            const nextSymbol = dataSeparated[i + 1];
            if (currentSymbol != "#" && nextSymbol == "#") {
              alert("The tag is invalid");
              validate = "Invalid";
              break;
            }
            
            for(let item of nonAlphabetical){
              if(currentSymbol != "#" && nextSymbol == item || currentSymbol == "#" && nextSymbol == item){
                validate = "Invalid";
                alert("The tag is invalid");
                break;
              }
            }
          }
        }
        
        if (validate == "") {
          const noDuplicated = dataSeparated.filter((item:any, index = "#") => dataSeparated.indexOf(item) === index);
          const noHashtag = noDuplicated.slice(1).join("")
          alert(noHashtag);
        }
      }

  return (
      <form onSubmit={Hashtag} className="container col-6 text-center mt-4 bg-light">
        <div className="pb-2">
            <div className="form-group mt-5 p-3 d-flex">
                <div className="form-group mb-3 col-5 mx-auto">
                    <label>Enter Tag</label>
                    <input type="text" className="form-control" id="hashtagString" required aria-describedby="emailHelp " />
                </div>
            </div>
            <button type="submit" className="btn btn-primary mt-3 mb-3 mx-auto d-block">Send Tag</button>
        </div>
    </form>
  );
}