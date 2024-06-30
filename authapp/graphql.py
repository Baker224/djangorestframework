import graphene
from authapp.models import MyUser
from graphene_django import DjangoObjectType
from TODO.models import TODO, Project

class UsersObjectType(DjangoObjectType):
    class Meta:
        model = MyUser
        fields = '__all__'

class TODOObjectType(DjangoObjectType):
    class Meta:
        model = TODO
        fields = '__all__'

class ProjectObjectType(DjangoObjectType):
    class Meta:
        model = Project
        fields = "__all__"

class Query(graphene.ObjectType):

    all_users = graphene.List(UsersObjectType)

    def resolve_all_users(self, info):
        return MyUser.objects.all()

    all_todo = graphene.List(TODOObjectType)

    def resolve_all_todo(self, info):
        return TODO.objects.all()

    all_projects = graphene.List(ProjectObjectType)

    def resolve_all_projects(self, info):
        return Project.objects.all()

    get_user_by_name = graphene.List(UsersObjectType,
                                       first_name=graphene.String(required=False),
                                       last_name=graphene.String(required=False)
                                       )

    def resolve_get_user_by_name(self, info, first_name=None, last_name=None):
        if not first_name and not last_name:
            return MyUser.objects.all()
        params = {}
        if first_name:
            params['first_name__contains'] = first_name
        if last_name:
            params['last_name__contains'] = last_name
        return MyUser.objects.filter(**params)

    todo_projects_users = graphene.List(UsersObjectType)
    def resolve_todo_projects_users(self, info):
        return MyUser.objects.all()


class UserCreateMutation(graphene.Mutation):
    class Arguments:
        first_name = graphene.String(required=True)
        last_name = graphene.String(required=True)
        is_superuser = graphene.Boolean(required=True)
        username = graphene.String(required=True)
        is_staff = graphene.Boolean(required=True)
        email = graphene.String(required=True)

    user = graphene.Field(UsersObjectType)

    @classmethod
    def mutate(cls, root, info, first_name,last_name,is_superuser, username,is_staff,email):
        user = MyUser(first_name=first_name, last_name=last_name, is_superuser=is_superuser, is_staff=is_staff, email=email, username=username)
        user.save()
        return cls(user)

class Mutations(graphene.ObjectType):
    create_user = UserCreateMutation.Field()


schema = graphene.Schema(query=Query, mutation=Mutations)