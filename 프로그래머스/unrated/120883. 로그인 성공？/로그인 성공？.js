function solution(id_pw, db) {
    for(let user of db){
        if(id_pw[0] !== user[0]){continue;}
        if (id_pw[1] === user[1]){
            return "login";
        }else {
            return "wrong pw";
        }
    }return "fail";
}