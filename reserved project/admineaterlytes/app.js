// Your web app's Firebase configuration

        var imglink;

const firebaseConfig = {
    apiKey: "AIzaSyBPF5k7Y9pfg7vLxQ48zP-uK4DY6oi25Jg",
    authDomain: "eaterlytestapi.firebaseapp.com",
    databaseURL: "https://eaterlytestapi-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "eaterlytestapi",
    storageBucket: "gs://eaterlytestapi.appspot.com/",
    messagingSenderId: "927116745672",
    appId: "1:927116745672:web:87a805546835c95a6bfefd",
    measurementId: "G-SNY2QYZJWV"
  };
  
  

  // Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
  //const db = getFirestore(app);
  const db = firebase.firestore();
  

  
let titlesV = document.getElementById("title");
let subtitlesV = document.getElementById("subtitle");
let explainV = document.getElementById("explain");
//Create Data for Splashscreen

async function getData() {
    const test = await db.collection("eaterlytesting").orderBy("urutan").limit(3).get();
    test
    
    test.docs.forEach((mhs,i) => {
        console.log(i);
        console.log(mhs.data());
        document.getElementById('tbody').innerHTML +=
        `<tr>
        <td>${mhs.data().urutan}</td>
        <td><img src="${mhs.data().link}"></td>
        <td>${mhs.data().title}</td>
        <td>${mhs.data().subtitle}</td>
        <td>${mhs.data().explain}</td>
        <td>
        <button class="btn btn-warning edit Data" data-id="${mhs.id}" data-bs-toggle="modal" data-bs-target="#modalUpdate">Edit</button>
        <button class="btn btn-danger hapusData" data-id="${mhs.id}">Hapus</button>
        </td>
        </tr>
        `;
    });
 
}

getData();

//update Data for splash screen



document.getElementById('saveData').addEventListener('click', function(e){
    db.collection("eaterlytesting").add({
    title: document.getElementById("title").value,
    subtitle: document.getElementById("subtitle").value,
    explain: document.getElementById("explain").value,
    link: imglink,
}).then((docRef) => {
    document.getElementById('tbody').innerHTML = ``;
    getData();
    console.log("Document written with ID: ", docRef.id);
})
.catch((error) => {
    console.error("Error adding document: ", error);
});
})


document.getElementById('tbody').addEventListener('click', function(e){
    console.log(e.target.dataset.id);
    if (e.target.classList.contains('hapusData')) {
        db.collection("eaterlytesting").doc(e.target.dataset.id).delete().then(() => {
            document.getElementById('tbody').innerHTML = ``;
            getData();
            console.log("Document succesfully deleted");
        }).catch((error) => {
            console.error("Eror", error);
        });
    }
    if (e.target.classList.contains('editData')){
        alert ("Edit Data");

    }
});

//uploadimg

var files = [];
var reader = new FileReader();

var namebox = document.getElementById('namebox');
var nameboxpop = document.getElementById('nameboxpop');
var extlab = document.getElementById('extlab');
var extlabpop = document.getElementById('extlabpop');
var myimg = document.getElementById('myimg');
var proglab = document.getElementById('upprogress');
var SelBtn = document.getElementById('selbtn');
var SelBtnPop = document.getElementById('selbtnn');
var UpBtn = document.getElementById('upbtn');
var UpBtnPop = document.getElementById('upbtnn');
var DownBtn = document.getElementById('downbtn');
var DownBtnPop = document.getElementById('downbtnn');

var input = document.createElement('input');
input.type = 'file';

var inputPop = document.createElement('inputPop');
inputPop.type = 'file';

input.onchange = e => {
    files = e.target.files;
    
    var extention = GetFileExt(files[0]);
    var name = GetFileName(files[0]);
    
    if (name) {
    namebox.value = name;
    }
    
    if (extention) {
    extlab.innerHTML = extention;
    }
    
    
    reader.readAsDataURL(files[0]);
    
    
};

inputPop.onchange = e => {
    files = e.target.files;
    
    var extention = GetFileExt(files[0]);
    var name = GetFileName(files[0]);
    
    if (name) {
    nameboxpop.value = name;
    }
    
    if (extention) {
    extlab.innerHTML = extention;
    }
    
    
    reader.readAsDataURL(files[0]);
    
    
};

reader.onload = function(){
    if (reader.result) {
    myimg.src = reader.result;
    }
    
};

//selection

SelBtn.onclick = function(){
    input.click();
}

SelBtnPop.onclick = function(){
    input.click();
}

function GetFileExt(file){
    var temp = file.name.split('.');
    var ext = temp.slice((temp.length-1), (temp.length));
    return '.' + ext[0]
}

function GetFileName(file){
    var temp = file.name.split('.');
    var fname = temp.slice(0, -1).join('.');
    return fname;
}

//upload process
async function UploadProcess(){
    var ImgToUpload = files[0];
    var ImgName = namebox.value + extlab.innerHTML;
    
    const metaData = {
        contentType: ImgToUpload.type
    };
    
    const storage = firebase.storage();
    
    const stroageRef = storage.ref( "Images" + ImgName);
    
    stroageRef.put(ImgToUpload).then((snapshot) => {
        proglab.innerHTML = "Upload " + "success";
        console.log('Uploaded a blob or file!');
        snapshot.ref.getDownloadURL().then(function(downloadURL) {
            imglink = downloadURL;
        }); 
      }).on;

    

    // UploadTask.on('state-changed', (snapshot)=>{
        
    // },
    // (error) => {
    //     alert("error:image not uplaode");
    // },
    // ()=>{
    //     getDownloadURL(UploadTask.snapshot.ref).then((downloadURL)=>{
    //         console.log(downloadURL);
    //     });
    // }
    // );
    
}

UpBtn.onclick = UploadProcess;
UpBtnPop.onclick = UploadProcess;








