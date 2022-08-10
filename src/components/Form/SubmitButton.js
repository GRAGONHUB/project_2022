const SubmitButton = ({ children = 'save' }) => (
  <div class="form-control mt-6">
    <button class="btn">{children}</button>
  </div>
)

export default SubmitButton
