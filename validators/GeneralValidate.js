const GeneralValidate={
    check_id:(id)=>{
        if(id.length!=9)
            throw new Error("the id is not valid")
        if (!/^[1-9]+$/.test(id)) {
            throw new Error('the id is not valid!')
        }
    },
    checkLevel:(level)=>{
        if(level!='קל' && level!='בינוני' && level!='קשה')
            throw new Error("the level is not valid. level can be: easy/medium/hard")
    },
    checkType:(type)=>{
        if(type!='חלבי' && type!='בשרי' && type!='פרווה')
            throw new Error("the type is not valid. level can be: חלבי/בשרי/פרווה")
    }
    
}
export default GeneralValidate