<template>
    <div class="post-header">
      <div class="container">
        <div class="container-info">
          <h1>{{ $t('index.title') }}</h1>
          <h2>{{ $t('index.subTitle') }}</h2>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
      name: "Main" ,
      methods: {
      }
    }
</script>

<style lang="scss" scoped>
  $amazon: #417B5A;

  .post-header{
    background: url("../../assets/healthy-index/main2.jpg") no-repeat center center fixed;
    background-size: cover;
    height: 750px;
    display: flex;
    justify-content: center;
    align-items: center;
    div.container{
      display: flex;
      justify-content: center;
      align-items: center;
      h1{
        font-size: 50px;
        line-height: 62px;
        padding-bottom: 10px;
        color: $amazon;
        text-transform: uppercase;
        font-weight: 700;
      }
      h2{
        font-size: 30px;
        line-height: 45px;
        color: $amazon;
        text-transform: uppercase;
        font-weight: 700;
      }
    }
  }
  @media (max-width: 1200px) {
    .post-header{
      .darken{
        h1{
          font-size: 45px;
          line-height: 50px;
        }
      }
    }
  }
  @media (max-width: 992px) {
    .post-header{
      .darken{
        h1{
          font-size: 36px;
          line-height: 40px;
        }
        button{
          font-size: 20px;
        }
      }
    }
  }
  @media (max-width: 768px) {
    .post-header{
      .darken{
        h1{
          font-size: 28px;
        }
        button{
          font-size: 20px;
        }
      }
    }
  }
  @media (max-width: 576px) {
    .post-header{
      .darken{
        h1{
          font-size: 24px;
        }
        button{
          font-size: 20px;
        }
      }
    }
  }
</style>
