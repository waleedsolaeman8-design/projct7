// Exercise 7: Modal Dialog & Toast Notifications
// Write your implementation under each TODO.

const openButton = document.querySelector('#open-modal');
const dialog = document.querySelector('#confirm-dialog');
const toastRegion = document.querySelector('#toast-region');
function showToast(message, type = 'success') {
  // TODO: append toast, remove after timeout, use safe textContent.
  // Suggested markup (styled in styles.css): <div class="toast success">…</div> or class="toast error".
const toast = document.createElement('div');
toast.className = `toast ${type}`;
toast.textContent = message;
toastRegion.appendChild(toast);
setTimeout(() => {
  toast.remove();
}, 3000);
}
function openDialog() {
  // TODO: show modal dialog and manage focus.
  // Tip: set dialog.returnValue = '' first, so a value left over from the last close can't be read by mistake.
  dialog.returnValue = ''
  dialog.showModal()
}
openButton.addEventListener('click', openDialog);
dialog.addEventListener('close', () => {
  // TODO: restore focus and respond to confirmation (check dialog.returnValue).
  if (dialog.returnValue === 'confirm') {
showToast('Draft deleted successfully', 'success');
  }else if (dialog.returnValue === 'cancel') {
showToast('Action cancelled', 'error');
  }
  openButton.focus();
});
