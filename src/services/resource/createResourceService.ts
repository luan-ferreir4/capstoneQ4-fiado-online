class CreateResourceService {
  async execute(resourceData: ): Promise<Resource> {
    const resource: IResource = await new ResourceRepository().saveResource(
      req.validated as IResource
    );
    return resource;
  }
}
