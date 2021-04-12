const fileRegex = /\.(csv)$/;
const Papa = require('papaparse');
module.exports = function loadCsv() {
    return {
        name: 'vite-plugin-csv',
        transform(code, id, ssr) {
            if (fileRegex.test(id)) {
                const parsed = Papa.parse(code, {})
                return {
                    code: 'export default ' + JSON.stringify(parsed.data),
                    map: null
                }
            }
        }
    }
}