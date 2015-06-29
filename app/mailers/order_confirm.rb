class OrderConfirm < ApplicationMailer
  def order_confirmation(user)

    mail to: user.email, subject: "You're order was completed."
  end
end
