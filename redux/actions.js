let contactId = 0;

export const addInfo = (name, phoneNumber) => {
    console.log("action", name, phoneNumber)
    return ({
    type: "Add_Info",
    payload: {
        
            id: ++contactId,
            name: name,
            phoneNumber: phoneNumber
        
    }
})};
export const ClearList = () => {
    console.log("ClearList");
    return ({
        
    type: "ClearList",
    payload: {}
})};