const link = "./data/jobs.json";
let jobs;
let maxNumOfJobs = 4;

async function loadData(){
    const response = await fetch(link);
    const data = await response.json();
    createJobs(data);
    createJobBox(jobs);

}
function createJobs(data){
    jobs = data;
}

function setFilter(item){
    
    let child = document.getElementsByClassName("filter-btn");
    console.log(child , child.length);
    for(let i=0; i<child.length; i++){
        child[i].classList.remove("active");
    }
    item.className = "active filter-btn";
    let val = item.value;
    let newArrOfJobs
    if(val === "front"){
        newArrOfJobs = jobs.filter(job => job.position === "Front-End");
    }else if(val === "back"){
        newArrOfJobs = jobs.filter(job => job.position === "Back-End");
    }else if(val === "blockchain"){
        newArrOfJobs = jobs.filter(job => job.position === "Blockchain");
    }else{
        newArrOfJobs = jobs;
    }
    
    createJobBox(newArrOfJobs);

    
}

let n = 0;
function moreJobs(){
    
    
    n++;
    console.log(n);
    let moreBtn = document.getElementById("show-more-jobs-id");
    if(n % 2 == 1){
        maxNumOfJobs = jobs.length;
        moreBtn.innerHTML = "Show less jobs";    
    }else if(n % 2 == 0){
        maxNumOfJobs = 4;
        moreBtn.innerHTML = "Show all jobs";
    }
    createJobBox(jobs);
}


function createJobBox(jobsNew){

    let jobsLength;
    if(jobsNew.length < maxNumOfJobs){
        jobsLength = jobsNew.length;
    }else{
        jobsLength = maxNumOfJobs;
    }

    let boxes = document.getElementById("jobs");
    var child = boxes.lastElementChild; 
        while (child) {
            boxes.removeChild(child);
            child = boxes.lastElementChild;
        }

    for(let i=0; i<jobsLength; i++){
        let jobBox = document.createElement("div");
        jobBox.className = "job-card";


        let jobPosition = jobsNew[i].position;
        let postDate = jobsNew[i].date;
        let jobTitle = jobsNew[i].name;
        let jobDescription = jobsNew[i].description;
        let jobType = jobsNew[i].type;
        let jobLocation = jobsNew[i].location;
        let jobLvl = jobsNew[i].level;
        let jobDep = jobsNew[i].department;
        let jobSalary = jobsNew[i].salary;

        let jobCardTop = document.createElement("div");
        jobCardTop.className = "top";
        
        let jobCardTopType = document.createElement("div");
        jobCardTopType.className = "type";
        let jobCardTopTypeP = document.createElement("p");
        jobCardTopTypeP.innerHTML = jobPosition ;
        if(jobPosition === "Back-End"){
            jobCardTopType.style.backgroundColor = "#C1A4FF";
        }else if(jobPosition === "Blockchain"){
            jobCardTopType.style.backgroundColor = "#A4FF84";
        }else if(jobPosition === "Office"){
            jobCardTopType.style.backgroundColor = "#C1C1C1";
        }
        jobCardTopType.appendChild(jobCardTopTypeP);
        jobCardTop.appendChild(jobCardTopType);

        let jobCardTopTime = document.createElement("div");
        jobCardTopTime.className = "time";
        let jobCardTopTimeP = document.createElement("p");
        jobCardTopTimeP.innerHTML = postDate;
        jobCardTopTime.appendChild(jobCardTopTimeP);
        jobCardTop.appendChild(jobCardTopTime);

        let jobCardCenter = document.createElement("div");
        jobCardCenter.className = "center";

        let jobCardCenterTitle = document.createElement("div");
        jobCardCenterTitle.className = "title";
        let jobCardCenterTitleH2 = document.createElement("h2");
        jobCardCenterTitleH2.innerHTML = jobTitle ;
        jobCardCenterTitle.appendChild(jobCardCenterTitleH2);
        jobCardCenter.appendChild(jobCardCenterTitle);

        let jobCardCenterDes = document.createElement("div");
        jobCardCenterDes.className = "description";
        let jobCardCenterDesP = document.createElement("p");
        jobCardCenterDesP.innerHTML = jobDescription ;
        jobCardCenterDes.appendChild(jobCardCenterDesP);
        jobCardCenter.appendChild(jobCardCenterDes);

        let jobCardBasicInfo = document.createElement("div");
        jobCardBasicInfo.className = "basic-info";

        let jobCardBasicInfoInfo = document.createElement("div");
        jobCardBasicInfoInfo.className = "info info-1";
        let img = document.createElement("img");
        img.src = "./images/work-time.svg";
        let p = document.createElement("p");
        p.innerHTML = jobType;
        jobCardBasicInfoInfo.appendChild(img);
        jobCardBasicInfoInfo.appendChild(p);
        jobCardBasicInfo.appendChild(jobCardBasicInfoInfo);

        let jobCardBasicInfoInfo2 = document.createElement("div");
        jobCardBasicInfoInfo2.className = "info info-2";
        let img2 = document.createElement("img");
        img2.src = "./images/location.svg";
        let p2 = document.createElement("p");
        p2.innerHTML = jobLocation;
        jobCardBasicInfoInfo2.appendChild(img2);
        jobCardBasicInfoInfo2.appendChild(p2);
        jobCardBasicInfo.appendChild(jobCardBasicInfoInfo2);

        let jobCard = document.createElement("div");
        jobCard.className = "card";
        jobCard.appendChild(jobCardTop);
        jobCard.appendChild(jobCardCenter);
        jobCard.appendChild(jobCardBasicInfo);

        let applayBtn = document.createElement("button");
        applayBtn.innerHTML = "Applay now"
        applayBtn.className = "applay-now";

        applayBtn.onclick = function(){
            let page1 = document.getElementById("page-1");
            page1.className = "hide-page"
            let page2 = document.getElementById("page-2");
            page2.classList.remove("hide-page");

            let jobTitleId = document.getElementById("job-title-id");
            jobTitleId.innerHTML = jobTitle;
            let joblocationeId = document.getElementById("location-id");
            joblocationeId.innerHTML = jobLocation;
            let jobTypeId = document.getElementById("worktime-id");
            jobTypeId.innerHTML = jobType;
            let jobLvleId = document.getElementById("lvl-id");
            jobLvleId.innerHTML = jobLvl;
            let jobDepId = document.getElementById("dep-id");
            jobDepId.innerHTML = jobDep;
            let jobSalaryeId = document.getElementById("salary-id");
            jobSalaryeId.innerHTML = jobSalary;
            let fullDate = document.getElementById("posted-on");
            fullDate.innerHTML = postDate;

            let applBtn = document.getElementById("appl-now-id");
            applBtn.onclick = function(){
                let sect1 = document.getElementById("about-job-section-1");
                let sect2 = document.getElementById("about-job-section-2");
                sect1.className = "hide-page";
                sect2.classList.remove("hide-page");
            }

        }

        jobBox.appendChild(jobCard);
        jobBox.appendChild(applayBtn);
        boxes.appendChild(jobBox);
        

    }
}