export default function createIteratorObject(report) {
    const keys = Object.values(report.allEmployees)
    const arr = []
    for (const key of keys) {
        for (const item of key){
            arr.push(item)
        }
    }
    return arr
}