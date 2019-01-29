from rest_framework import permissions

class IsOwnerOrAdminOrReadOnly(permissions.BasePermission):
  # custom permission to only allow owners of an object to edit it
  def has_object_permission(self, request, view, obj):
    if request.method in permissions.SAFE_METHODS:
      return True

    # allow admin user
    if request.user and request.user.is_staff:
      return True

    # write permissions are only allowed to the user itself
    return obj == request.user