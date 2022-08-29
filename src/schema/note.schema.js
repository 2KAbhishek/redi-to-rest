import {Entity, Schema} from "redis-om";

class Note extends Entity {
    toJSON() {
        return {
            id: this.entityId,
            name: this.name,
            complete: this.complete
        }
    }
}

export const noteSchema = new Schema(Note, {
    name: {
        type: 'string'
    },
    complete: {
        type: 'boolean'
    }
}, {
    dataStructure: 'JSON'
});
