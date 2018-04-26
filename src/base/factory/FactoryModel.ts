import bootstrapSequilize from "../model/bootstrapSequilize";

class FactoryModel {
    static objects() : any {
        return bootstrapSequilize()
    }
}

export default FactoryModel