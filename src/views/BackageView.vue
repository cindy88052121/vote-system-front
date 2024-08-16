<template>
    <div id="backage">
        <div class="container mt-5">
            <h2>投票項目管理</h2>

            <!-- 新增項目的表單 -->
            <div class="input-group mb-3">
                <input type="text" class="form-control" v-model="newVoteItemName" maxlength="50" placeholder="請輸入項目名稱">
                <button class="btn btn-success" @click="addVoteItem">新增</button>
            </div>

            <!-- 項目清單 -->
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>編號</th>
                        <th>項目</th>
                        <th>票數</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="(voteItem, index) in voteItems" :key="voteItem.id">
                        <td>{{ voteItem.id }}</td>
                        <td>{{ voteItem.name }}</td>
                        <td>{{ voteItem.voteCount }}</td>
                        <td>
                            <button class="btn btn-danger" @click="deleteVoteItem(index, voteItem.id)">刪除</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>

<script>

export default {
    name: 'BackageView',
    data() {
        return {
            voteItems: [],
            newVoteItemName: ""
        };
    },
    mounted() {
        findAll(this);
    },
    methods: {
        addVoteItem() {
            const $this = this;
            if ($this.newVoteItemName.trim() === '') {
                alert('請輸入項目名稱');
                return;
            }
            $this.axios.post('/voteItems', { 
                    name: $this.newVoteItemName 
                })
                .then(res => {
                    if (res.data.code === 'NG') {
                        throw new Error(res.data.message);
                    }
                    $this.newVoteItemName = '';

                    let resData = res.data.data;
                    $this.voteItems.push({
                        id: resData[0],
                        name: resData[1],
                        voteCount: resData[2]
                    });
                })
                .catch(error => {alert(error.message)});
        },
        deleteVoteItem(index, id) {
            const $this = this;
            $this.axios.delete(`/voteItems/${id}`)
                .then((res) => {
                    if (res.data.code === 'NG') {
                        throw new Error(res.data.message);
                    }
                    $this.voteItems.splice(index, 1)
                })
                .catch(error => {alert(error.message)});
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
</script>
