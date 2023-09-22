let handleGetFormData = () => ({
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    city: document.getElementById("city").value,
    zipCode: document.getElementById("zip-code").value,
    status: document.getElementById("status").checked,
  });
  
  
  function isNumber(zipcode){
    return isNaN(zipcode) ? false : true
  }
  
  function checkboxIsChecked(){
    const status = document.getElementById("status").checked;
    return status ? true : false;
  }
  
  function validateFormData(data){
    if(data  !== null && isNumber(data.zipCode) && checkboxIsChecked()){
      return true;
    } else {
      return false;
    }
  }
  
  function submit(){
    const hasil = validateFormData(handleGetFormData());
    if(hasil === false){
      document.getElementById('warning').innerHTML = "Periksa form anda sekali lagi";
    } else {
      document.getElementById('warning').innerHTML = '';
    }
  }