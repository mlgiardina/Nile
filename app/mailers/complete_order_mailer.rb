class CompleteOrderMailer < ApplicationMailer
  def order_confirmation(user)
    @user = user

    mail to: user.email, subject: "You're order was completed."
  end
end
