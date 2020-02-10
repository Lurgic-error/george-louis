<template>
    <div class="section-contacts">
        <div class="section-content">
            <div class="contacts">
                <h4 class="section-title">Contacts</h4>
                <div class="contact-phone">
                    <b-icon-phone class="icon"></b-icon-phone> <span class="phone">+255736272440</span>
                </div>
                <div class="contact-email">
                    <b-icon-envelope class="icon"></b-icon-envelope> <span class="email">glngwenya@gmail.com</span>
                </div>
                <!-- <div class="contact-socials">
                    <b-icon-house class="icon"></b-icon-house>
                    <b-icon-house class="icon"></b-icon-house>
                </div> -->
            </div>

            <div class="message">
                <h4 class="section-title">Get In Touch</h4>
                <form class="contact-form">
                    <input type="text" name="name" id="" class="client-name form-control" placeholder="Your name">
                    <input type="email" class="form-control" placeholder="Your email">
                    <textarea name="message" class="form-control" placeholder="Your message" cols="30"
                        rows="5">
                    </textarea>

                    <button type="submit" class="app-btn btn-cta-dark">Send</button>

                </form>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'section-contacts',

    }
</script>

<style lang="scss" scoped>
    @import '../static/styles/_mixins.scss';


    .section-contacts {
        padding: 4rem 16rem;

        @include respond(phone){
            padding: 2rem;
        }
    }

    .section-content {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .contacts + .message{
            margin-left: 2rem;
        }

        @include respond(phone){
            flex-direction: column;

             .contacts + .message{
            margin-left: 0;
            margin-top: 2rem;
        }
        }
    }

    .contacts {
        flex: 1;
         @include respond(phone){
            width: 100%;
        }
    }

    // .section-title {}

    .contact-phone {
        display: flex;
        align-items: center;

        .phone{
            @include respond(phone) {
      font-size: 1.2rem;
            }
        }
    }

    .contact-email {
        display: flex;
        align-items: center;

        .email{
             @include respond(phone) {
      font-size: 1.2rem;
            }
        }
    }

    .icon{
        font-size: 2rem;
        margin-right: .5rem;
    }
    .message {
        flex: 1;

        .section-title {
            margin-bottom: 1.75rem;
        }

        @include respond(phone){
            flex: 1;
            width: 100%;
        }
    }

    .contact-form {
        .form-control + .form-control{
            margin-top: 1.25rem;
        }
    }
</style>