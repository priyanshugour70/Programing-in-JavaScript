// try{
//     let a = 0 ;
//     console.log(program);
//     console.log("program ran successfully...")
// }
// catch(error){
//     console.log("This is an error ..")
//     console.log(program)
// }
// finally{
//     console.log("I am a good Boy .....!")
// }

// // console.log("I am a good Boy .....!")

const f = () => {
    try {
        let a = 0;
        // console.log(program);
        console.log("program ran successfully...");
        return;
    } catch (error) {
        console.log("This is an error ..");
        console.log(program);
    } finally {
        console.log("I am a good Boy .....!");
    }

    // console.log("I am a good Boy .....!")
};
