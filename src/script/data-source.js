class DataSource {

    static getData(url , options){

        return new Promise((resolve , reject) => {

            fetch(url , options)
                .then(response => {
                    if (response.status !== 200 ) {
                        alert('!!! Opps.. Something has error while get data');
                    } else {
                        return response.json();
                    }
                })
                .then(responseJson => {
                    resolve(responseJson);
                })
                .catch(error => reject(error));

        });

    }

}

export default DataSource;