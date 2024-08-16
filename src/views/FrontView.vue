<template>
    <div id="front">
        <div class="container mt-5">
            <h2>項目投票</h2>
            <form @submit.prevent="submitVotes">
                <input 
                    type="text" 
                    id="voterName" 
                    class="form-control mt-3" 
                    v-model="voterName" 
                    placeholder="請輸入投票人名稱"
                    required
                />
                
                <table class="table table-striped mt-3">
                    <thead>
                        <tr>
                            <th scope="col">選擇</th>
                            <th scope="col">項目名稱</th>
                            <th scope="col">票數</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="(voteItem) in voteItems" :key="voteItem.id">
                            <td>
                                <input 
                                    type="checkbox" 
                                    :value="voteItem.id" 
                                    v-model="selectedItems"  
                                />
                            </td>
                            <td>{{ voteItem.name }}</td>
                            <td>{{ voteItem.voteCount }}</td>
                        </tr>
                    </tbody>
                </table>
                <button type="submit" class="btn btn-primary mt-3">
                    提交投票
                </button>
            </form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'FrontView',
    data() {
        return {
            voteItems: [],
            selectedItems: [],
            voterName: ""
        };
    },
    mounted() {
        findAll(this);
    },
    methods: {
        submitVotes() {
            if (this.selectedItems.length === 0) {
                alert("請至少選擇一個項目");
                return;
            }
            vote(this);
        }
    }
}
/**
 * 查詢-全部投票項目
 * @param {Object} $this
 */
function findAll($this) {
    $this.axios.get('/voteItems')
        .then(res => {$this.voteItems = res.data.data})
        .catch(error => {console.error("Error", error)});
}

/**
 * 投票
 * @param {Object} $this
 */
function vote($this) {
    $this.axios.post('/voteItems/vote', { 
            itemIds: $this.selectedItems, 
            voterName: $this.voterName 
        })
        .then((res) => {
            if (res.data.code === 'NG') {
                throw new Error(res.data.message);
            }
            findAll($this);
            $this.selectedItems = [];
        })
        .catch(error => {alert(error.message)}); 
}
</script>
