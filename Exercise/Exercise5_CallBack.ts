export function question1() {
    function callAPICreateUser(data, status) {
        if (status == "error") {
            console.log("Loi khi call API API Create User");
            console.log("End!");
        } else {
            callAPICreateGroup(data, status);
            console.log("ok");

        }


        function callAPICreateGroup(data, status) {
            if (status == "error") {
                console.log("Loi khi call API API Create Group");
                console.log("End!");
            } else {
                callAPIAddUserToGroup(data, status);
            }


            function callAPIAddUserToGroup(data, status) {
                if (status == "success") {
                    console.log("End!");
                }
            }
        }
    };
    callAPICreateUser("a", "success");
}




export default { question1 }



function callAPICreateUser(arg0: string, arg1: string) {
    throw new Error("Function not implemented.");
}


